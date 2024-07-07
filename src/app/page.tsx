"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageIcon, Send } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { sendMsg } from "@/lib/gemini";

export default function Home() {
  const [msg, setmsg] = useState("")
  const [chat, setChat] = useState([
    { role: 'Assistente', content: 'No que posso te ajudar hoje?' }
  ]);
  const [image, setImage] = useState<File | undefined>(undefined)
  const [b64, setB64] = useState<string | null>(null)

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const imgInptRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })  
    }
  }, [chat]);

  const handleKD = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (msg.trim() === "") return;
    if (e.key === "Enter"){
      await handleSendMessage()
    }
  }

  const handleSendMessage = async () => {
    if (msg.trim() === "") return;
    const newMessage = {
      role: 'Você',
      content: msg.trim()
    };
    const recived = msg;
    setmsg("");
    
    setChat([...chat, newMessage]);
    let res;
    await handleConvertToBase64().then(() => {
      return sendMsg(recived, b64)
    }).then((r) => {
      const aimsg = {
        role: 'Assistente',
        content: r 
      };
      setChat([...chat, newMessage, aimsg]);
    })

    
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (event.target.files && event.target.files.length > 0) {
      setImage(file);
    }
  };

  const handleConvertToBase64 = async () => {
    if (image) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const base64String = Buffer.from(event.target?.result as ArrayBuffer).toString('base64');
        console.log(base64String)
        setB64(base64String);
      };
      reader.readAsArrayBuffer(image);
    }
  };

  const handleImgBtn = () => {
    imgInptRef.current?.click()
  }

  return (
    <main>
      <div ref={chatContainerRef} className="overflow-y-scroll overflow-x-hidden h-[calc(100vh-8em)] scroll-smooth">
        <div className="flex flex-col gap-2 align-bottom justify-end w-screen p-5">
          {
            chat.map((m, k)=>(
              <Card key={k}>
                <CardHeader>
                  <h1 className={cn("text-md font-semibold", m.role === 'Você' && 'text-right')}>{m.role}</h1>
                </CardHeader>
                <CardContent>
                  {m.content}
                </CardContent>
              </Card>
            ))
          }
        </div>
      </div>
      <div className="absolute items-center gap-2 flex bottom-20 px-2 w-screen h-10">

        <Input className="w-[90%]" value={msg} onKeyDown={handleKD} onChange={(e)=>setmsg(e.target.value)}/>
        
        <Button size='sm' variant='link' onClick={handleImgBtn}>
          <ImageIcon className="size-5"/>
        </Button>
        
        <Button size='sm' onClick={handleSendMessage}>
          <Send className="size-4"/>
        </Button>

        <input ref={imgInptRef} className="invisible size-0" type="file" onChange={handleFileChange}/>
      </div>
    </main>    
  );
}
