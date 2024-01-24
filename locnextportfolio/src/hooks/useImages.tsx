
export default function useImages() {
    const techImages = [
        {
            href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
            src: "/Images/Technologies/C-sharp.png",
            alt: "C-sharp",
        },
        {
            href: "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor",
            src: "/Images/Technologies/Blazor.png",
            alt: "Blazor",
        },
        {
            href: "https://learn.microsoft.com/en-us/aspnet/mvc/overview/getting-started/introduction/getting-started",
            src: "/Images/Technologies/ASP-NET.png",
            alt: "ASP.NET Core",
        },
        {
            href: "https://azure.microsoft.com/en-ca/resources/cloud-computing-dictionary/what-is-azure/?&ef_id=_k_CjwKCAiA-P-rBhBEEiwAQEXhH9AHNgUNwF-QUnNeWBp1HlAjZk9-Xpi7_5PJg30nNNcKa49otdTmAxoCwv0QAvD_BwE_k_&OCID=AIDcmmqz3gd78m_SEM__k_CjwKCAiA-P-rBhBEEiwAQEXhH9AHNgUNwF-QUnNeWBp1HlAjZk9-Xpi7_5PJg30nNNcKa49otdTmAxoCwv0QAvD_BwE_k_&gad_source=1&gclid=CjwKCAiA-P-rBhBEEiwAQEXhH9AHNgUNwF-QUnNeWBp1HlAjZk9-Xpi7_5PJg30nNNcKa49otdTmAxoCwv0QAvD_BwE",
            src: "/Images/Technologies/Microsoft-Azure.png",
            alt: "Microsoft Azure",
        },
        {
            href: "https://aws.amazon.com/free/?gclid=CjwKCAiA5L2tBhBTEiwAdSxJXwHdS5PplMvAWqSmo-U3Y8SV27YFnkDflWNYkC8Q4Rdq69N2qfUq_BoCjfUQAvD_BwE&trk=e747cc26-a307-4ae0-981a-6dc5c1cb4121&sc_channel=ps&ef_id=CjwKCAiA5L2tBhBTEiwAdSxJXwHdS5PplMvAWqSmo-U3Y8SV27YFnkDflWNYkC8Q4Rdq69N2qfUq_BoCjfUQAvD_BwE:G:s&s_kwcid=AL!4422!3!453053794209!e!!g!!aws!10705896207!102406402981&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all",
            src: "/Images/Technologies/AWS.png",
            alt: "AWS",
        },
        {
            href: "https://powerbi.microsoft.com/en-ca/",
            src: "/Images/Technologies/PowerBI.png",
            alt: "Microsoft PowerBi",
        },
        {
            href: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads",
            src: "/Images/Technologies/SQL.png",
            alt: "SQL Server",
        },
        {
            href: "https://www.mongodb.com/cloud/atlas/register",
            src: "/Images/Technologies/MongoDB.png",
            alt: "MongoDB",
        },
        {
            href: "https://docs.github.com/en",
            src: "/Images/Technologies/Github.png",
            alt: "GitHub",
        },
        {
            href: "https://www.python.org/",
            src: "/Images/Technologies/Python.png",
            alt: "Python",
        },
        {
            href: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started",
            src: "/Images/Technologies/HTML.png",
            alt: "HTML 5",
        },
        {
            href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            src: "/Images/Technologies/CSS.png",
            alt: "CSS 3",
        },
        {
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            src: "/Images/Technologies/JS.png",
            alt: "Javascript",
        },
        {
            href: "https://api.jqueryui.com/",
            src: "/Images/Technologies/JqueryUI.png",
            alt: "JqueryUI",
        },
        {
            href: "https://api.jquery.com/",
            src: "/Images/Technologies/JQuery.png",
            alt: "Jquery",
        },
        {
            href: "https://angular.io/docs",
            src: "/Images/Technologies/Angular.png",
            alt: "AngularJS",
        },
        {
            href: "https://legacy.reactjs.org/docs/getting-started.html",
            src: "/Images/Technologies/React.png",
            alt: "ReactJS",
        },
        // {
        //     href: "https://vuejs.org/guide/introduction.html",
        //     src: "/Images/Technologies/Vue.png",
        //     alt: "VueJS",
        // },
        {
            href: "https://nextjs.org/docs",
            src: "/Images/Technologies/NextJs.png",
            alt: "NextJS",
        },
        {
            href: "https://tailwindcss.com/",
            src: "/Images/Technologies/Tailwind.png",
            alt: "Tailwind CSS",
        },
        {
            href: "https://wordpress.org/documentation/",
            src: "/Images/Technologies/Wordpress.png",
            alt: "Wordpress",
        },
        {
            href: "https://learn.microsoft.com/en-us/powershell/",
            src: "/Images/Technologies/PowerShell.png",
            alt: "PowerShell",
        },
        {
            href: "https://www.freecodecamp.org/news/bash-scripting-tutorial-linux-shell-script-and-command-line-for-beginners/",
            src: "/Images/Technologies/Bash-Script.png",
            alt: "Bash Script",
        },
    ]

    const serviceImages = [
        {
            href: "https://www.interaction-design.org/literature/topics/web-design",
            src: "/Images/Education/Web-Design.png",
            alt: "Website Design",
            title: "Web Design"
        },
        {
            href: "https://support.microsoft.com/en-us/office/database-design-basics-eb2159cf-1e30-401a-8084-bd4f9c9ca1f5",
            src: "/Images/Education/Database-Design.png",
            alt: "Database Design",
            title: "Database Design"
        },
        {
            href: "https://dotnet.microsoft.com/en-us/apps/aspnet/apis",
            src: "/Images/Education/REST-API.png",
            alt: "Server Side Construction",
            title: "APIs"
        },
        {
            href: "https://www.techtarget.com/searchcio/definition/e-commerce",
            src: "/Images/Education/Ecommerce-Store.png",
            alt: "Ecommerce Store",
            title: "Ecommerce"
        },
    ]
    return {
        techImages,
        serviceImages
    }
}
