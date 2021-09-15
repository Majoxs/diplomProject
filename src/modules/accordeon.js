/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const accordeon = () => {
    const accordBlock = document.querySelector('.accordeon'),
        accordItems = accordBlock.querySelectorAll('.element'),
        accordContent = accordBlock.querySelectorAll('.element-content'),
        accordTitle = accordBlock.querySelectorAll('.title');

    const toggleAccordeonItems = (index) => {
        for (let i = 0; i < accordItems.length; i++) {
            if (index === i) {
                accordItems[i].classList.add('active');
            } else {
                accordItems[i].classList.remove('active');
            }
        }

        for (let i = 0; i < accordContent.length; i++) {
            if (index === i) {
                accordContent[i].style.display = 'block';
            } else {
                accordContent[i].style.display = 'none';
            }
        }
    };

    accordBlock.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('title')) {
    
            accordTitle.forEach((item, i) => {
                if (item === target) {
                    toggleAccordeonItems(i);
                }
            });
        }
    });
    
};

export default accordeon;
