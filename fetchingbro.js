const myfunc = async () => {
  const resp = await fetch('https://www.greatfrontend.com/api/questions/like-button', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: Math.random() > 0.5 ? 'like' : 'unlike',
    }),
  });

  const response = await resp.json();
  console.log('🚀 ~ myfunc ~ response ', response);
};

myfunc();
