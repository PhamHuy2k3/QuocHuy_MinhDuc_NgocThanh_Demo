document.addEventListener('DOMContentLoaded', function() {
    const names = document.querySelectorAll('.Name');
    names.forEach(name => {
        name.addEventListener('click', function() {
            const mission = this.nextElementSibling.textContent;
            alert(`Mission: ${mission}`);
        });
    });
    const images = document.querySelectorAll('.Images img');
    images.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s';
        });
        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
    const now = new Date();
    console.log('Page loaded on:', now.toLocaleString());
});