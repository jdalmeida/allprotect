'use client'

import { AlertCircle, Settings, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation(){
    const [verifySel, setVerifySel] = useState(false)
    const [denunciaSel, setDenunciaSel] = useState(false)
    const [optionsSel, setOptionsSel] = useState(false)
    const page = usePathname()

    useEffect(()=>{
        if(page === '/'){
            setVerifySel(true)
            setDenunciaSel(false)
            setOptionsSel(false)
        } else if (page === '/denuncia'){
            setVerifySel(false)
            setDenunciaSel(true)
            setOptionsSel(false)
        } else if (page === '/options'){
            setVerifySel(false)
            setDenunciaSel(false)
            setOptionsSel(true)
        }
    },[page])

    return(
        <footer className="absolute bottom-0 w-screen bg-zinc-200 dark:bg-zinc-950">
            <div className="h-20 w-screen flex justify-around align-center items-center px-3">
                
                <Link href='/'>
                    <Button size='lg' variant={verifySel ? 'default': 'ghost'}>
                        <Sparkles className="size-8"/>
                    </Button>
                </Link>
        
                <Link href='/denuncia'>
                    <Button size='lg' variant={denunciaSel ? 'default': 'ghost'}>
                        <AlertCircle className="size-8 "/>
                    </Button>
                </Link>

                <Link href='/options'>
                    <Button size='lg' variant={optionsSel ? 'default': 'ghost'}>
                        <Settings  className="size-8"/>
                    </Button>
                </Link>
            </div>
      </footer>
    )
}