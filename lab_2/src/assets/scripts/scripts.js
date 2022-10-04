document.addEventListener('DOMContentLoaded', () => {
    const accordionActions = document.querySelectorAll('.accordion-action');
    if (accordionActions.length) {
        accordionActions.forEach(actionBtn => {
            actionBtn.addEventListener('click', (event) => {
                const targetAccordionItem = event.target.closest('.accordion-item');
                const targetBody = targetAccordionItem.querySelector('.accordion-body');
                targetAccordionItem.classList.toggle('active');
                if (targetBody.style.maxHeight) {
                    targetBody.style.maxHeight = null;
                } else {
                    targetBody.style.maxHeight = targetBody.scrollHeight + "px";
                }
            });
        });
    }
});