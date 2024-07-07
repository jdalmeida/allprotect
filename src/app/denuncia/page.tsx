import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Denuncia(){

    return(
        <main className="p-2 flex items-center w-full h-screen">
            <Card className="w-full">
                <CardHeader>
                    <h1 className="text-lg font-semibold">Denuncie um site suspeito</h1>
                </CardHeader>
                <CardContent className="flex flex-col gap-y-3">
                    <div>
                        <p>Endereço do site:</p>
                        <Input/>
                    </div>
                    <div>
                        <p>Link do anúncio: <span className="text-muted-foreground">opicional</span></p>
                        <Input/>
                    </div>
                    <div>
                        <p>Descreva a denúncia:</p>
                        <Input/>
                    </div>
                    <Button>Registrar denúncia</Button>
                </CardContent>
            </Card>
        </main>
    )
}