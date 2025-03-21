export async function POST(request) {
  // Simple API route that returns success
  return Response.json({ 
    success: true, 
    message: 'Your message has been received. We will contact you soon!' 
  });
}