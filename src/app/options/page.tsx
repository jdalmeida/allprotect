"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import {Select, SelectContent, SelectItem, SelectLabel, SelectValue, SelectTrigger  } from '@/components/ui/select'

const urls = [
    {
        url: "americanas.com.br.phishing.website", // URL maliciosa imitando Americanas
        modo: "Bloqueio total"
    },
    {
        url: "magazineluiza.com.br.loginfalso", // URL maliciosa imitando Magazine Luiza
        modo: "Bloqueio total"
    },
    {
        url: "bancoonline.com.br.phishing", // URL maliciosa imitando site de banco online
        modo: "Bloqueio total"
    },
    {
        url: "pagamentoseguro.com.br.faturafalsa", // URL maliciosa para pagamentos falsos
        modo: "Bloqueio total"
    },
    {
        url: "ofertasimperdiveis.com.br.promocaofalsa", // URL com ofertas falsas
        modo: "Bloqueio parcial" // Permitir acesso, mas exibir aviso de alerta
    },
    {
        url: "servicosdigitais.com.br.suportedutoso", // URL com suporte técnico falso
        modo: "Bloqueio parcial"
    },
];  

export default function Options() {
    return(
        <main className='h-screen'>
            <div className="p-2">
                <h1 className="font-medium text-lg">Opções</h1>
            </div>
            <div className="flex flex-col p-2 gap-4">
                <div className='w-full'>
                    <p className="font-medium">Conexão do Firewall:</p>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Conexão" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Extensiva</SelectItem>
                            <SelectItem value="dark">Moderada</SelectItem>
                            <SelectItem value="system">Desligada</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <p className="font-medium">Editar URLs Bloqueadas:</p>
                    <div>
                            <Table>
                            <TableCaption>Adicione ou remova bloqueios</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">URL</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Modo</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    urls.map((u, k)=>(
                                        <TableRow key={k}>
                                            <TableCell className="font-medium">{u.url}</TableCell>
                                            <TableCell>Bloqueado</TableCell>
                                            <TableCell>{u.modo}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>    
                    </div>
                </div>
            </div>
        </main>
    )
}