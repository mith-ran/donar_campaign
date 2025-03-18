import { up } from "./data.js";
import { req } from "./req.js";
const campaigns = [];
let campaignsList="";
const ren=()=>{
    const createCampaignButton = document.getElementById('create-campaign-button');
 campaignsList = document.getElementById('campaigns-list');

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

        campaigns.push(campaign);

        let locmem=  up(campaign);
        
        renderCampaigns();
        clearForm();
    } else {
        alert('Please fill in all fields and ensure the target amount is positive.');
    }
});

}

function renderCampaigns() {
    campaignsList.innerHTML = '';
    campaigns.forEach((campaign, index) => {
        const campaignElement = document.createElement('div');
        campaignElement.classList.add('campaign');
        campaignElement.innerHTML = `
            <h2>${campaign.title}</h2>
            <p>${campaign.description}</p>
            <div class="progress">
                <div class="progress-bar" style="width: ${
                    (campaign.currentAmount / campaign.targetAmount) * 100
                }%;"></div>
            </div>
            <p>Raised: ₹${campaign.currentAmount} / ₹${campaign.targetAmount}</p>
            <button class="donate-button" data-index="${index}">Donate</button>
        `;
        campaignsList.appendChild(campaignElement);

        const donateButton = campaignElement.querySelector('.donate-button');
        donateButton.addEventListener('click', () => {
            const amount = parseFloat(prompt('Enter donation amount:'));
            if (amount > 0) {
                campaigns[index].currentAmount += amount;
                renderCampaigns();
            }
        });
    });
}

function clearForm() {
    document.getElementById('campaign-title').value = '';
    document.getElementById('campaign-description').value = '';
    document.getElementById('target-amount').value = '';
}
ren();
renderCampaigns(); 
