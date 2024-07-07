"use server"
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

export async function sendMsg(message: string, image:string|null) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction:"Você é um verificador de anúncios online e é responsável por analisar um print de um anúncio e dizer se ele é ou não um anúncio confiável. Analise o conteúdo da imagem extensivamente. Alguns sinais que podem indicar fraude são: Valores muito fora do preço comum de mercado, imagens com baixa qualidade, perfis com nomes parecidos com grandes empresas e imagem de perfil com logo de grandes empresas que não condizem com o nome do perfil ou o anúncio em si."});
    let cont
    if (image !== null) {
        cont = [message,{inlineData: {data: image, mimeType: 'image/png'}}];
        console.log(image)
    } else {
        cont = [message];
    }
    const result = await model.generateContent(cont);
    return result.response.text();
}