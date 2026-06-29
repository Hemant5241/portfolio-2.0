import { GENERAL_INFO } from '@/lib/data';

const Footer = async () => {
    const visitorStats = await fetch(
        'https://api.counterapi.dev/v1/hemant5241/portfolio-2.0/up',
    );

    const { count } = await visitorStats.json();

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
                        <div className="flex items-center justify-center gap-2 pt-3 text-sm">
                            <span className="inline-block size-2 rounded-full animate-white-green"></span>
                            <span>{Number(count).toLocaleString()} visitors</span>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

