import Header from '@/app/(Components)/Header'
import Image from 'next/image'
import React from 'react'
import { yam } from "@/app/Assets"
import Menu from '@/app/(Components)/Menu/Menu'
import { Hero } from '@/app/(Components)/Hero'

function HealthCondition() {
    return (
        <>
            <Header />
            <Hero />
            <Menu />
        </>
    )
}

export default HealthCondition