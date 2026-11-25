const columns = [
    {
        titile: "ONLINE SHOPPING",
        links: ["Men", "Women", "Kids", "Home & Living", "Beauty", "Gift Cards"],
    },
    {
     titile: "USEFUL LINKS",
     links: ["Blog", "Careers", "Site Map", "Corporate Information", "Whitehat", "Technology"]   
    },
    {
        titile: "CUSTOMER POLICIES",
        links: ["Contact US", "FAQ", "T&C", "Terms Of Use", "Track Orders", "Shipping", "Cancellation", "Returns", "Privacy policy"], 
    },
    {
      titile: "CONTACT",
      links: ["support@ecommerce.com", "+92 310 2483859", "Hyderabad", "Pakistan", "Mon - Sat", "9AM - 6PM"]
    }
];

const Footer = () => {
    return (
        <footer className="mt-10 bg-gray-100 border-t border-gray-200">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-8 px-5 py-8  md:grid-cols-4 sm:px-8 lg:py-10">
                {columns.map((col)=>(
                <div key={col.titile} className="flex flex-col">
                <h3 className="mb-4 text-sm font-bold text-[#282c3f] sm:mb-6">{col.titile}</h3>
                {col.links.map((link)=>(
                    <a href="#" className="pb-1.5 text-sm text-[#696b79] no-underline hover:text-[#282c3f] sm:text-[15px] " key={link}>
                     {link}      
                    </a>
                ))}     
                </div>
                ))}
            </div>

            <div className="border-t border-gray-200 px-5 py-4 text-center text-xs text-[#94969f] sm:text-sm">
                 © 2026 www.Ecommerce.com All rights reserved. 
            </div>
        </footer>
    )
}

export default Footer;