function createSvgContainer() {
    const svgContainer = document.createElement('div');
    svgContainer.className = 'svg-icon'; // Add a class to easily identify the container
    svgContainer.style.cssText = `
        position: absolute;
        top: -16px;
        right: -26px;
        width: 24px;
        height: 24px;
    `;
    svgContainer.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#FEE01A"/>
            <path d="M11.4805 4.55092C11.7623 4.25203 12.2377 4.25203 12.5195 4.55092L13.6652 5.76599C13.8322 5.94307 14.0779 6.0229 14.3171 5.97778L15.9582 5.66822C16.3619 5.59207 16.7464 5.87145 16.7987 6.27892L17.0115 7.93537C17.0425 8.17679 17.1943 8.38578 17.4143 8.48986L18.924 9.20405C19.2953 9.37973 19.4422 9.83177 19.245 10.1922L18.4435 11.6573C18.3267 11.8708 18.3267 12.1292 18.4435 12.3427L19.245 13.8078C19.4422 14.1682 19.2953 14.6203 18.924 14.796L17.4143 15.5101C17.1943 15.6142 17.0425 15.8232 17.0115 16.0646L16.7987 17.7211C16.7464 18.1285 16.3619 18.4079 15.9582 18.3318L14.3171 18.0222C14.0779 17.9771 13.8322 18.0569 13.6652 18.234L12.5195 19.4491C12.2377 19.748 11.7623 19.748 11.4805 19.4491L10.3348 18.234C10.1678 18.0569 9.92211 17.9771 9.68294 18.0222L8.04182 18.3318C7.63812 18.4079 7.25359 18.1286 7.20127 17.7211L6.98854 16.0646C6.95754 15.8232 6.8057 15.6142 6.58569 15.5101L5.07604 14.796C4.70468 14.6203 4.55781 14.1682 4.75498 13.8078L5.55652 12.3427C5.67334 12.1292 5.67334 11.8708 5.55652 11.6573L4.75498 10.1922C4.55781 9.83177 4.70468 9.37973 5.07604 9.20405L6.58569 8.48986C6.8057 8.38578 6.95754 8.17679 6.98854 7.93537L7.20127 6.27892C7.25359 5.87145 7.63812 5.59207 8.04182 5.66822L9.68294 5.97778C9.92211 6.0229 10.1678 5.94307 10.3348 5.76599L11.4805 4.55092Z" fill="#002752"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 9.74999C10.5 10.1642 10.1642 10.5 9.75001 10.5C9.33579 10.5 9 10.1642 9 9.74999C9 9.33578 9.33579 9 9.75001 9C10.1642 9 10.5 9.33578 10.5 9.74999ZM14.6809 9.31961C14.9189 9.55758 14.9189 9.94341 14.6809 10.1814L10.1809 14.6813C9.94293 14.9193 9.55709 14.9193 9.31911 14.6813C9.08113 14.4433 9.08113 14.0575 9.31911 13.8195L13.8192 9.31961C14.0571 9.08164 14.443 9.08164 14.6809 9.31961ZM14.25 15C14.6642 15 15 14.6642 15 14.25C15 13.8358 14.6642 13.5 14.25 13.5C13.8358 13.5 13.5 13.8358 13.5 14.25C13.5 14.6642 13.8358 15 14.25 15Z" fill="white"/>
        </svg>
    `;
    return svgContainer;
}

function createBadge() {
    const svgContainerBadge = document.createElement('div');
    svgContainerBadge.className = 'badge'; // Add a class to easily identify the container
    svgContainerBadge.style.cssText = `
        display: inline-block;
        position: absolute;
        top: -20px;
        right: -80px;
    `;
    svgContainerBadge.innerHTML = `
        <svg width="75" height="24" viewBox="0 0 75 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12C0 5.37258 5.37258 0 12 0H63C69.6274 0 75 5.37258 75 12C75 18.6274 69.6274 24 63 24H12C5.37259 24 0 18.6274 0 12Z" fill="#FEE01A"/>
            <text x="45.5" y="17" text-anchor="middle" fill="#002752" font-size="12" font-family="Arial" font-weight="bold">Promo</text>
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="position: absolute;top: 4px; left: 4px;">
            <path d="M7.48051 0.550923C7.76235 0.252032 8.23765 0.252032 8.51949 0.550923L9.66523 1.76599C9.8322 1.94307 10.0779 2.0229 10.3171 1.97778L11.9582 1.66822C12.3619 1.59207 12.7464 1.87145 12.7987 2.27892L13.0115 3.93537C13.0425 4.17679 13.1943 4.38578 13.4143 4.48986L14.924 5.20405C15.2953 5.37973 15.4422 5.83177 15.245 6.19217L14.4435 7.65731C14.3267 7.87084 14.3267 8.12916 14.4435 8.34269L15.245 9.80783C15.4422 10.1682 15.2953 10.6203 14.924 10.796L13.4143 11.5101C13.1943 11.6142 13.0425 11.8232 13.0115 12.0646L12.7987 13.7211C12.7464 14.1285 12.3619 14.4079 11.9582 14.3318L10.3171 14.0222C10.0779 13.9771 9.8322 14.0569 9.66523 14.234L8.51949 15.4491C8.23765 15.748 7.76235 15.748 7.48051 15.4491L6.33477 14.234C6.1678 14.0569 5.92211 13.9771 5.68294 14.0222L4.04182 14.3318C3.63812 14.4079 3.25359 14.1286 3.20127 13.7211L2.98854 12.0646C2.95754 11.8232 2.8057 11.6142 2.58569 11.5101L1.07604 10.796C0.704683 10.6203 0.557806 10.1682 0.754976 9.80783L1.55652 8.34269C1.67334 8.12916 1.67334 7.87084 1.55652 7.65731L0.754976 6.19217C0.557806 5.83177 0.704682 5.37973 1.07604 5.20405L2.58569 4.48986C2.8057 4.38578 2.95754 4.17679 2.98854 3.93537L3.20127 2.27892C3.25359 1.87145 3.63812 1.59207 4.04182 1.66822L5.68294 1.97778C5.92211 2.0229 6.1678 1.94307 6.33477 1.76599L7.48051 0.550923Z" fill="#002752"/>
            <mask id="path-2-inside-1_89_14352" fill="white">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.50001 5.74999C6.50001 6.1642 6.16422 6.49998 5.75001 6.49998C5.33579 6.49998 5 6.1642 5 5.74999C5 5.33578 5.33579 5 5.75001 5C6.16422 5 6.50001 5.33578 6.50001 5.74999ZM10.6809 5.31961C10.9189 5.55758 10.9189 5.94341 10.6809 6.18138L6.1809 10.6813C5.94293 10.9193 5.55709 10.9193 5.31911 10.6813C5.08113 10.4433 5.08113 10.0575 5.31911 9.81954L9.81915 5.31961C10.0571 5.08164 10.443 5.08164 10.6809 5.31961ZM10.25 11C10.6642 11 11 10.6642 11 10.25C11 9.8358 10.6642 9.50002 10.25 9.50002C9.83579 9.50002 9.5 9.8358 9.5 10.25C9.5 10.6642 9.83579 11 10.25 11Z"/>
            </mask>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.50001 5.74999C6.50001 6.1642 6.16422 6.49998 5.75001 6.49998C5.33579 6.49998 5 6.1642 5 5.74999C5 5.33578 5.33579 5 5.75001 5C6.16422 5 6.50001 5.33578 6.50001 5.74999ZM10.6809 5.31961C10.9189 5.55758 10.9189 5.94341 10.6809 6.18138L6.1809 10.6813C5.94293 10.9193 5.55709 10.9193 5.31911 10.6813C5.08113 10.4433 5.08113 10.0575 5.31911 9.81954L9.81915 5.31961C10.0571 5.08164 10.443 5.08164 10.6809 5.31961ZM10.25 11C10.6642 11 11 10.6642 11 10.25C11 9.8358 10.6642 9.50002 10.25 9.50002C9.83579 9.50002 9.5 9.8358 9.5 10.25C9.5 10.6642 9.83579 11 10.25 11Z" fill="white" mask="url(#path-2-inside-1_89_14352)"/>
        </svg>
    `;
    return svgContainerBadge;
}

function addBadgeToElement(element) {
    if (element) {
        // Check if the SVG container already exists
        if (!element.querySelector('.badge')) {
            const svgContainerBadge = createBadge();
            element.style.position = 'relative';
            element.appendChild(svgContainerBadge);
        }
    }
}

function addSvgToElement(element) {
    if (element) {
        // Check if the SVG container already exists
        if (!element.querySelector('.svg-icon')) {
            const svgContainer = createSvgContainer();
            element.style.position = 'relative';
            element.appendChild(svgContainer);
        }
    }
}

function removeBadgeFromElement(element) {
    if (element) {
        const badgeContainer = element.querySelector('.badge');
        if (badgeContainer) {
            element.removeChild(badgeContainer);
        }
    }
}

function removeSvgFromElement(element) {
    if (element) {
        const svgContainer = element.querySelector('.svg-icon');
        if (svgContainer) {
            element.removeChild(svgContainer);
        }
    }
}

function removeAllBadgesAndSvgs() {
    const badges = document.querySelectorAll('.badge');
    const svgs = document.querySelectorAll('.svg-icon');

    badges.forEach(badge => badge.parentNode.removeChild(badge));
    svgs.forEach(svg => svg.parentNode.removeChild(svg));
}

function findAndAddSvg() {
    if (sessionStorage.getItem('telepassPlusVisited')) {
        removeAllBadgesAndSvgs();
        return;
    }

    const intervalId = setInterval(() => {
        const telepassPlus = Array.from(document.querySelectorAll('.menuItem-level-3 .CtaContent__label')).find(
            elTelepass => elTelepass.textContent.trim() === 'Telepass Plus'
        );

        if (telepassPlus) {
            addBadgeToElement(telepassPlus);
            const telepassPlusItems = document.querySelectorAll('.menuItem.menuItem-level-3.menuItem-MenuListItem');

            telepassPlusItems.forEach(item => {
                if (item.textContent.includes('Telepass Plus')) {
                    item.style.fontWeight = '700';
                    item.style.backgroundColor = '#E2EEFD';
                    item.style.padding = '8px 56px 8px 8px';
                    item.style.borderRadius = '12px';
                }
            });

            const telepassPlusTexts = document.querySelectorAll('.menuItem.menuItem-level-3.menuItem-MenuListItem a .CtaContent__label');

            telepassPlusTexts.forEach(text => {
                if (text.textContent.includes('Telepass Plus')) {
                    text.style.fontWeight = '700';
                }
            });

            telepassPlus.addEventListener('click', () => {
                sessionStorage.setItem('telepassPlusVisited', 'true');
            });

            clearInterval(intervalId);
        }
    }, 1000);

    const offerte = Array.from(document.querySelectorAll('.CtaContent__label')).find(
        el => el.textContent.trim() === 'Offerte'
    );

    addSvgToElement(offerte);
}

function applyMobileStyles() {
    const isMobile = window.innerWidth <= 768;

    const telepassPlusItems = document.querySelectorAll('.menuItem.menuItem-level-3.menuItem-MenuListItem');

    telepassPlusItems.forEach(item => {
        if (item.textContent.includes('Telepass Plus')) {
            item.style.fontWeight = '700';
            item.style.backgroundColor = '#E2EEFD';
            item.style.padding = '10px 56px 10px 8px';

            if (isMobile) {
                item.style.borderRadius = '0';
            } else {
                item.style.borderRadius = '12px';
            }
        }
    });

    const telepassPlusTexts = document.querySelectorAll('.menuItem.menuItem-level-3.menuItem-MenuListItem a .CtaContent__label');

    telepassPlusTexts.forEach(text => {
        if (text.textContent.includes('Telepass Plus')) {
            text.style.fontWeight = '700';

            if (isMobile) {
                text.style.paddingLeft = '20px';
            }
        }
    });
}

// Check the current URL and remove badges and SVGs if it matches the specified URL
if (window.location.href === 'https://www.telepass.com/it/privati/offerte/plus') {
    setTimeout(removeAllBadgesAndSvgs, 1500);
} else {
    findAndAddSvg();
}

applyMobileStyles();
window.addEventListener('resize', applyMobileStyles);