import { GENERAL_INFO } from '@/lib/data';

const Footer = async () => {
    let count = 0;
    try {
        const visitorStats = await fetch(
            'https://api.counterapi.dev/v1/hemant5241/portfolio-2.0/up',
            { next: { revalidate: 60 } } // cache for 60 seconds to reduce timeouts
        );
        if (visitorStats.ok) {
            const data = await visitorStats.json();
            count = data.count || 0;
        }
    } catch (error) {
        console.error('Failed to fetch visitor stats:', error);
    }

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="">
                    <a
                        href="https://github.com/Hemant5241/portfolio-2.0"
                        target="_blank"
                        className="leading-none text-muted-foreground hover:underline hover:text-white"
                    >
                        Design & built by Hemant Bhosale
                        <div className="flex items-center justify-center gap-2 pt-3 text-sm text-primary animate-visitor-pulse">
                            <span className="inline-block size-2 rounded-full bg-primary"></span>
                            <span>{Number(count).toLocaleString()} visitors</span>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

