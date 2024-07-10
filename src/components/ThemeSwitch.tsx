'use client'
import { useMode } from '@/context/ModeContext';
import React, { useEffect } from 'react'

function handleTheme(mode:string) {
  const body = document.querySelector('body')

  if (mode === "dark") {
    body?.classList.add('dark')
  }
  else {
    body?.classList.remove('dark')
  }

}

function ThemeSwitch() {
	const {  mode } = useMode();
  useEffect(() => {
    handleTheme(mode)
  },[mode])
  return (
    <div></div>
  )
}

export default ThemeSwitch