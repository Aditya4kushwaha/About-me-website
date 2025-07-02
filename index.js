const skillTags = document.querySelectorAll('.skill-tag');
        const socialLinks = document.querySelectorAll('.social-link');


        skillTags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.05)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        socialLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.1)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });


        const avatar = document.querySelector('.avatar');
        avatar.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });


        const statusBadge = document.querySelector('.status-badge');
        statusBadge.addEventListener('click', function() {
            this.textContent = this.textContent === 'Rvmp soon...' ? 'Available!' : 'Rvmp soon...';
            this.style.background = this.textContent === 'Available!' ? '#10b981' : '#4ade80';
        });

        const profileSection = document.querySelector('.profile-section');
        function floatAnimation() {
            profileSection.style.transform = `translateY(${Math.sin(Date.now() * 0.001) * 2}px)`;
            requestAnimationFrame(floatAnimation);
        }
        floatAnimation();