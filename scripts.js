document.addEventListener('DOMContentLoaded', () => {
    const scrollSpeed = 20; // Adjust this value to control the scroll speed (in seconds)
  
    const imagesInner = document.querySelector('.scrolling-images-inner');
    if (imagesInner) {
      imagesInner.style.animation = `scroll ${scrollSpeed}s linear infinite`;
    }

    // Navigation Bar Shrink Effect on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Image Hover Effect (Optional, if you have product items with hover effect)
    document.querySelectorAll('.product-item').forEach(item => {
        const img = item.querySelector('img');
        const info = item.querySelector('.product-info');
        const moreInfoButton = item.querySelector('.more-info');

        // Hover effect
        item.addEventListener('mouseover', () => {
            img.style.transform = 'translateY(-10px) rotateY(15deg) rotateX(10deg)';
        });

        item.addEventListener('mouseleave', () => {
            img.style.transform = 'translateY(0) rotateY(0) rotateX(0)';
        });

        // Toggle product information
        moreInfoButton.addEventListener('click', () => {
            if (info.style.display === 'block') {
                info.style.display = 'none';
                moreInfoButton.textContent = 'More Info';
            } else {
                info.style.display = 'block';
                moreInfoButton.textContent = 'Less Info';
            }
        });
    });
});
