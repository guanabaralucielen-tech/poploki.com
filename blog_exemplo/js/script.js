// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.getElementById('main-nav');
    
    if (mobileMenu && mainNav) {
        mobileMenu.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Obrigado por assinar nossa newsletter! Em breve você receberá nossas novidades.');
            this.reset();
        });
    }
    
    // Script: gera links de compartilhamento com URL/Título atuais (para artigos)
    const shareFb = document.getElementById('share-fb');
    const shareTw = document.getElementById('share-tw');
    const shareWa = document.getElementById('share-wa');
    
    if (shareFb && shareTw && shareWa) {
        var url = encodeURIComponent(window.location.href);
        var title = encodeURIComponent(document.title);
    
        shareFb.href = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
        shareTw.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + title;
        shareWa.href = 'https://wa.me/?text=' + title + '%20' + url;
    }
});
