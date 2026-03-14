export async function GET() {
  return Response.json({ 
    message: 'API funcionando!',
    timestamp: new Date().toISOString()
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  
  return Response.json({ 
    message: 'Datos recibidos',
    data: body,
    timestamp: new Date().toISOString()
  });
}
