const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // Allow all origins (adjust for security)
        methods: ["GET", "POST"],
    },
});

app.use(cors({
    origin:'*'   
}));
app.use(express.json());

let campaigns = [
    { title: "Help Build a School", description: "Support education!", currentAmount: 2500, targetAmount: 10000 },
    { title: "Support Local Farmers", description: "Aid struggling farmers.", currentAmount: 1200, targetAmount: 5000 },
];

// Send campaigns to frontend
app.get("/get", (req, res) => {
    res.json(campaigns);
});

// Add a new fundraising campaign
app.post("/add-campaign", (req, res) => {
    const newCampaign = req.body;


    if (!newCampaign.title || !newCampaign.targetAmount) {
        return res.status(400).json({ error: "Title and Target Amount are required" });
    }
    let flag=0;
    campaigns.forEach((campaign) => {
        if (campaign.title === newCampaign.title) {
           campaign.currentAmount = newCampaign.currentAmount;
           flag=1; 
           //return res.status(201).json({ message: "Campaign updated successfully!" });
        }
    });
    if(flag==0){
        
    newCampaign.currentAmount = 0; // Set initial amount
    campaigns.push(newCampaign);

    // Notify all clients about the new campaign
    io.emit("newCampaign", newCampaign);
    console.log(newCampaign)
    res.status(201).json({ message: "Campaign added successfully!" });
}})


io.on("connection", (socket) => {
    console.log("A user connected",socket.id);
    socket.on("newCampaign", (campaign) => {
        console.log("New campaign added:", campaign);
        io.emit("newCampaign", campaign);
    });

    socket.on("donation", (data) => {
        console.log("Donation received:", data);
       
        io.emit("donation", data);
    })



    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});


server.listen(8080,'0.0.0.0', () => {
    console.log("Server running on http://localhost:8080");
});
