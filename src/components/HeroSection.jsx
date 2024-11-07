import { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[##b3af37] font-medium'>Where Careers and Companies Connect.</span>
                <h1 className='text-5xl font-bold mt-5 mb-5'>Welcome to HireHub <br /> Get Your <span className='text-[#1F75FE]'>Dream Jobs</span></h1>
                <p className="px-8 mx-auto max-w-5xl mb-5">
  HireHub is here to make the hiring and job search process seamless for everyone—whether you’re a seasoned professional, recent graduate, or an expanding company. We offer an intuitive platform designed to streamline the way you find and connect with opportunities that match your career goals. With HireHub, you’ll have access to resources, job listings, and tools that simplify the search and help you take confident steps toward your aspirations.
</p>
                <div className='flex w-[50%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full'

                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#1F75FE]">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection