import React from 'react'
import newYearImage from './assets/newyear.png'
import music from './assets/newyear.mp3'
import useSound from 'use-sound'
const App = () => {
	const [play] = useSound(music, { volume: 0.25 })
	// play()
	return (
		<>
			<div className='bg-[#191C2F] w-full h-[100vh] flex justify-around items-center flex-col'>
				<div className='flex'>
					<h1 className='text-[#FFB23F] font-lexend font-bold text-[32px] text-center'>
						Бабушки, С Новым 2023 годом !!!
					</h1>
				</div>
				<img
					src={newYearImage}
					alt='New Year image'
					width={345}
					height={260}
					className='img w-[345px] h-[260px] rounded-[19px] shadow-[#2b305092] shadow-md'
				/>
				<p className='font-lexend text-white w-[345px] h-[260px] text-lg text-center hover:transition-all hover:text-[#ffb23f] transition-all'>
					Этот год был действительно тяжёлым и не простым, но в новом году я
					хочу что бы у вас сбывались все самые заветные мечты, всё было хорошо
					и всегда было хорошее настроение и успехов абсолютно везде. С
					наступившим 2023 годом !!!
				</p>
			</div>
		</>
	)
}

export default App
