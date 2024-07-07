"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Denuncia(){
    const [siteUrl, setSiteUrl] = useState<string>("")
    const [adUrl, setAdUrl] = useState<string>("")
    const [desc, setDesc] = useState<string>("")


    const handleClick = () =>{
        setSiteUrl("")
        setAdUrl("")
        setDesc("")
        alert("Denúncia registrada!")
    }

    return(
        <main className="p-2 flex items-center w-full h-screen">
            <Card className="w-full">
                <CardHeader>
                    <h1 className="text-lg font-semibold">Denuncie um site suspeito</h1>
                </CardHeader>
                <CardContent className="flex flex-col gap-y-3">
                    <div>
                        <p>Endereço do site:</p>
                        <Input value={siteUrl} onChange={(e)=>{setSiteUrl(e.target.value)}}/>
                    </div>
                    <div>
                        <p>Link do anúncio: <span className="text-muted-foreground">opicional</span></p>
                        <Input value={adUrl} onChange={(e)=>{setAdUrl(e.target.value)}}/>
                    </div>
                    <div>
                        <p>Descreva a denúncia:</p>
                        <Input value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
                    </div>
                    <Button onClick={handleClick}>Registrar denúncia</Button>
                </CardContent>
            </Card>
        </main>
    )
}