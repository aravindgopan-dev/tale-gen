import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import HTMLFlipBook from 'react-pageflip';
import { generatePdf } from '../utils/Pdf';
import { FaPlay } from "react-icons/fa";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Story() {
  const { storyId } = useParams();
  const book = useRef();
  const [pdfGenerated, setPdfGenerated] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handlePrintPdf = () => {
    generatePdf(data);
    setPdfGenerated(true);
  };

  const handleSpeak = (text) => {
    const speech = new SpeechSynthesisUtterance();
    const voices = window.speechSynthesis.getVoices();
    console.log(voices)
    speech.text = text;
    speech.lang = 'en-US';
    speech.volume = 1;
    speech.rate = 0.8;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  };

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await axios.get(`/api/v1/stories/${storyId}/pages`);
        console.log(response.data)
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [storyId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="h-screen flex flex-col items-center">
      <Navbar />
      <div className='flex flex-row justify-end w-full'>
        <button onClick={handlePrintPdf} disabled={pdfGenerated} className='bg-red-600 rounded-md text-white px-3 m-3'>
          {pdfGenerated ? 'PDF generated!' : ' PDF'}
        </button>
      </div>
      <div className='flex gap-[30px] w-[300px] justify-between'></div>
      <div className='w-full h-full flex justify-center pb-5'>
        <button className='rounded-md w-20' onClick={() => book.current.pageFlip().flipPrev()}>
          <GrPrevious size={30} />
        </button>
        <HTMLFlipBook
          ref={book}
          width={300}
          height={window.innerHeight * 0.9}
          showCover={true}
          className="mt-2"
          drawShadow={true}
          useMouseEvents={false}
        >
          <div className='demoPage bg-gradient-to-b from-primary to-secondary  rounded-xl'>
            {/*<h1 className='text-black  pl-16 text-5xl pt-[100px]  absolute'>Story book</h1>
            <img className='w-100 h-full' src="https://www.shutterstock.com/image-photo/old-paper-texture-background-vintage-260nw-1705115920.jpg" alt="" />*/}

          </div>

          {data.map((item, index) => (
            <div key={index} className="demoPage p-4 bg-slate-300  rounded-md">
              <img
                src={item.imgUrl}
                alt={`Page ${item.pageNumber}`}
                className="w-full h-64 object-cover rounded-md"
              />
              <span>
                <button onClick={() => handleSpeak(item.caption)}><FaPlay /></button>
              </span>
              <div className='overflow-scroll h-[200px]'>
              <p className="mt-4 text-center bg-slate w-full overflow-scroll">{item.caption}</p>
              <p className="mt-2 text-center text-sm font-semibold">Page {item.pageNumber}</p>
              </div>
              
            </div>
          ))}
          <div className='demoPage bg-gradient-to-b from-primary to-secondary  rounded-xl'>
            {/*<h1 className='text-black  pl-16 text-5xl pt-[100px]  absolute'>Story book</h1>
            <img className='w-100 h-full' src="https://www.shutterstock.com/image-photo/old-paper-texture-background-vintage-260nw-1705115920.jpg" alt="" />*/}

          </div>
        </HTMLFlipBook>
        <button className='rounded-md w-20' onClick={() => book.current.pageFlip().flipNext()}>
          <GrNext size={30} />
        </button>
      </div>
    </div>
  );
}

export default Story;
