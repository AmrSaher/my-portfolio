<template>
    <footer class="footer">
        <div class="container">
            <nav class="links">
                <ul>
                    <li>
                        <a href="#land-section">
                            <i class="bi bi-house"></i> Home
                        </a>
                    </li>
                    <li>
                        <a href="#about-me-section">
                            <i class="bi bi-person"></i> About me
                        </a>
                    </li>
                    <li>
                        <a href="#works-section">
                            <i class="bi bi-person-workspace"></i> My works
                        </a>
                    </li>
                    <li>
                        <a href="#contact-section">
                            <i class="bi bi-telephone"></i> Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <nav class="social-media">
                <ul>
                    <li>
                        <a href=""><i class="bi bi-tiktok"></i></a>
                    </li>
                    <li>
                        <a href=""><i class="bi bi-youtube"></i></a>
                    </li>
                    <li>
                        <a href=""><i class="bi bi-github"></i></a>
                    </li>
                    <li>
                        <a href=""><i class="bi bi-whatsapp"></i></a>
                    </li>
                </ul>
            </nav>
            <p class="teams">Teams of Service - Privacy Policy</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    border-top: 1px solid var(--hr-color);
    padding-top: 50px;
    padding-bottom: 20px;
    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
        .links {
            ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                row-gap: 20px;
                column-gap: 50px;
                a {
                    color: var(--text-color);
                    font-weight: 400;
                    font-size: 15px;
                    i {
                        margin-right: 3px;
                    }
                }
            }
        }
        .social-media {
            ul {
                display: flex;
                align-items: center;
                gap: 20px; 
                a {
                    color: var(--text-color);
                    padding: 8px 12px;
                    background-color: var(--btn-color);
                    border-radius: 50%;
                }
            }
        }
        .teams {
            margin-top: 20px;
            width: 100%;
            text-align: right;
            font-size: 14px;
            opacity: 0.8;
        }
    }
}
</style>