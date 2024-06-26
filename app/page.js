import Link from 'next/link';

const HomePage = () => {
    return (
        <div className='hero min-h-screen bg-base-200'>
            <div className='hero-content text-center'>
                <div className='max-w-md'>
                    <h1 className='text-6xl font-bold text-primary'>Open AI Chat Tour</h1>
                    <p className='py-6 text-lg leading-loose'>
                    Open AI Chat Tour: Your AI language partner.
                    Fueled by OpenAI, this tool boosts your discussions, content development, and beyond!
                    </p>
                    <Link href='/chat' className='btn btn-secondary '>
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;