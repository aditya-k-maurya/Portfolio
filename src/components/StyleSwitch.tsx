import React from 'react'

function StyleSwitch() {
  return (
		<div className="style-switcher">
			<div className="style-switcher-toggler s-icon">
				<i className="fas fa-cog fa-spin"></i>
			</div>

			<div className="day-night s-icon">
				<i className="fas"></i>
			</div>

			<h4>Theme Colors</h4>
			<div className="colors">
				<span className="color-1" ></span>
				<span className="color-2"></span>
				<span className="color-3" ></span>
				<span className="color-4" ></span>
				<span className="color-5"></span>
			</div>
		</div>
	);
}

export default StyleSwitch