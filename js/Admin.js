import { up } from "./data.js";
import { req,ip } from "./req.js";
const socket=io(`${ip}8080`)
const campaigns = [];
let campaignsList="";
const ren=()=>{
    const createCampaignButton = document.getElementById('create-campaign-button');
 campaignsList = document.getElementById('campaigns-list');
socket.on("newCampaign", (campaign) => {
    document.getElementById("fundraising-marquee").innerHTML = `New Campaign Added:- ${campaign.title}`;
});
createCampaignButton.addEventListener('click', () => {
    const title = document.getElementById('campaign-title').value;
    const description = document.getElementById('campaign-description').value;
    const targetAmount = parseFloat(document.getElementById('target-amount').value);

    if (title && description && targetAmount > 0) {
        const campaign = {
            title: title,
            description: description,
            targetAmount: targetAmount,
            currentAmount: 0,
        };

        req(campaign)
        socket.emit("newCampaign", campaign);
        campaigns.push(campaign);

        let locmem=  up(campaign);
        
   //     renderCampaigns();
        clearForm();
    } else {
        alert('Please fill in all fields and ensure the target amount is positive.');
    }
});

}



function clearForm() {
    document.getElementById('campaign-title').value = '';
    document.getElementById('campaign-description').value = '';
    document.getElementById('target-amount').value = '';
}
ren();
 
