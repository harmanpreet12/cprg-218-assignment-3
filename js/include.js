document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
            // Highlight current page in navigation
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navId = getNavId(currentPage);
            if (navId) {
                const activeLink = document.getElementById(navId);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
            
            // Initialize mobile menu
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            
            if (hamburger && navLinks) {
                hamburger.addEventListener('click', () => {
                    hamburger.classList.toggle('active');
                    navLinks.classList.toggle('active');
                });
                
                // Close mobile menu when clicking links
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.addEventListener('click', () => {
                        hamburger.classList.remove('active');
                        navLinks.classList.remove('active');
                    });
                });
            }
        })
        .catch(error => {
            console.error('Error loading header:', error);
            // Fallback for header if fetch fails
            document.getElementById('header-placeholder').innerHTML = `
                <header>
                    <div class="logo-container">
                        <img src="images/logo.svg" alt="Shangri La Resort Logo" class="logo">
                    </div>
                        <div class="weather-container">
                    <div id="weather-display">
                        <span id="temp">--°C</span>
                   
                        <span id="location">Cancun, Mexico</span>
                     </div>
                     </div>
                    <nav>
                        <ul class="nav-links">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="guest-rooms.html">Accommodations</a></li>
                            <li><a href="dining.html">Dining</a></li>
                            <li><a href="spa.html">Spa</a></li>
                            <li><a href="activities-and-excursions.html">Activities</a></li>
                            <li><a href="testimonials.html">Testimonials</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                        <div class="hamburger">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                    </nav>
                    <div class="booking-button">
                        <a href="booking.html" class="btn-book">Book Now</a>
                    </div>
                </header>
            `;
        });
    
    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            // Fallback for footer if fetch fails
            document.getElementById('footer-placeholder').innerHTML = `
                <footer>
                    <div class="footer-content">
                        <div class="footer-logo">
                            <img src="images/logo.svg" alt="Shangri La Resort Logo">
                        </div>
                        <div class="footer-links">
                            <div class="footer-column">
                                <h4>Resort</h4>
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                            <div class="footer-column">
                                <h4>Accommodations</h4>
                                <ul>
                                    <li><a href="guest-rooms.html#ocean-view">Ocean View Room</a></li>
                                    <li><a href="guest-rooms.html#beachfront">Beachfront Suite</a></li>
                                    <li><a href="guest-rooms.html#garden-view">Garden View Room</a></li>
                                </ul>
                            </div>
                            <div class="footer-column">
                                <h4>Experiences</h4>
                                <ul>
                                    <li><a href="dining.html">Dining</a></li>
                                    <li><a href="spa.html">Spa</a></li>
                                    <li><a href="activities-and-excursions.html">Activities</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-contact">
                            <h4>Contact Us</h4>
                            <p><i class="fas fa-map-marker-alt"></i> 123 Paradise Blvd, Tropical Island</p>
                            <p><i class="fas fa-phone"></i> +1 (555) 123-4567</p>
                            <p><i class="fas fa-envelope"></i> info@shangrilaresort.com</p>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2025 Shangri La Beach Resort. All rights reserved.</p>
                    </div>
                </footer>
            `;
        });
    
    // Helper function to get nav ID based on current page
    function getNavId(page) {
        switch(page) {
            case 'index.html':
                return 'nav-home';
            case 'guest-rooms.html':
                return 'nav-rooms';
            case 'dining.html':
                return 'nav-dining';
            case 'spa.html':
                return 'nav-spa';
            case 'activities-and-excursions.html':
                return 'nav-activities';
            case 'testimonials.html':
                return 'nav-testimonials';
            case 'contact.html':
                return 'nav-contact';
            default:
                return null;
        }
    }
});