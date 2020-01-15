export class LayoutModel{
    static viewBag() {
        return {
            admin: {
                email: "goodwish@gmail.com"
            },
            branding: {
                logoUrl: "assets/images/logo.png"
            },
            servicesUrl: "services.html",
            aboutUrl: "about.html",
            pressUrl: "press.html",
            contactUrl: "contact.html",
            siteName: "Oren Laboratory",
            servicesSubMenu: [
                { url: "#", label: "Data Science and Analytics" },
                { url: "#", label: "Statistics & Research" },
                { url: "#", label: "Development & Testing" },
                { url: "#", label: "SEO Auditing & Security" },
            ],
            aboutUsSubMenu: [
                { url: "#", label: "Our Background" },
                { url: "#", label: "Core Beliefs" },
                { url: "#", label: "Contact Us" },
            ],
            quickLinks :[
                { label: "Administrator Login", url: "admin.html"}
            ],
            usefulLinks: [
                { label: "Privacy Policy", url: "privacy.html" },
                { label: "Disclaimer", url: "disclaimer.html" },
                { label: "Contact Us", url: "contact.html" },
                { label: "Press Release", url: "press.html" }
            ],
            currentDate: new Date().getFullYear(),
            footerCopyrightMessage: "Oren Laboratory. All Right Reserved.",
            company: {
                viewMapUrl: "#",
                phoneNumber: "+27 87 057-1581",
                address: "Rosebank Corner 191, Park Town North, Gauteng, 2196, South Africa"
            }
        }
    }
}