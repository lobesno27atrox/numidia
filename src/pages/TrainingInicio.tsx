import ReactPlayer from 'react-player'

const TrainingInicioPage = () => {


        return (
                <div>
                       <p className='text-numid-blue-1 text-center text-7xl'>TRAINING</p>
<div className="gap-16 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-0">              
       

                       <div >
                               <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' playerVars />
                       </div>

                       <div >
                               <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' controls class />
                       </div>

 

                       </div>
               </div>                

               
       );





};

export default TrainingInicioPage;