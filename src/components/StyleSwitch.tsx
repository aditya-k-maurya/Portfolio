import React from 'react'

function StyleSwitch() {
  return (
		<div className="style-switcher">
			<div className="style-switcher-toggler s-icon">
				<img className='w-[20px] animate-spin-slow' src="/icon/gear-solid.svg" alt="" />
			</div>

			<div className="day-night s-icon">
				<img className='w-[20px]' src="/icon/sun-solid.svg" alt="" />
			</div>

			<h4>Theme Colors</h4>
			<div className="colors">
				<span className="color-1"></span>
				<span className="color-2"></span>
				<span className="color-3"></span>
				<span className="color-4"></span>
				<span className="color-5"></span>
			</div>
		</div>
	);
}

export default StyleSwitch