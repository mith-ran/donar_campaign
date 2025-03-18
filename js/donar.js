import { campaigns1 as campaigns } from "./data.js";
import { get,req } from "./req.js";
const campaignsList = document.querySelector('.container');

function renderCampaigns() {
    if (!campaignsList) {
        console.error("Container element not found");
        return;
    }

    campaignsList.innerHTML = '<h1>Fundraising Campaigns</h1>'; 
    campaigns.forEach((campaign, index) => {
        const campaignElement = document.createElement('div');
        campaignElement.classList.add('campaign');
        campaignElement.innerHTML += `
            <h2>${campaign.title}</h2>
            <p>${campaign.description}</p>
            <div class="progress" style="background: #ddd; height: 20px; border-radius: 5px;">
                <div class="progress-bar" style="width: ${
                    (campaign.currentAmount / campaign.targetAmount) * 100
                }%; height: 100%; background: #28a745; border-radius: 5px;"></div>
            </div>
            <p>Raised: ₹${campaign.currentAmount} / ₹${campaign.targetAmount}</p>
            <button class="donate-button btn" data-index="${index}">Donate</button>
        `;
        campaignsList.appendChild(campaignElement);

        const donateButton = campaignElement.querySelector('.donate-button');
        donateButton.addEventListener('click', () => {
            const amount = parseFloat(prompt('Enter donation amount:'));
            let ca=campaigns[index].currentAmount;
            if (amount > 0&&amount<=campaigns[index].targetAmount-ca) {
                campaigns[index].currentAmount += amount;
                renderCampaigns(); 
                req(campaign);
            }
        });
    });
}
const asy=async()=>{
    await get();
    renderCampaigns();
}
if (Array.isArray(campaigns)) {
    asy();
} else {
    console.error("Campaigns data is invalid");
}


