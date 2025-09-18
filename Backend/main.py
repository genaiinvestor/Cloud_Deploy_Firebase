from fastapi import FastAPI
import uvicorn
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

# Then add middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # Or replace "*" with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "FastAPI Backend with GenAI & ADK running!"}

@app.post("/evaluate")
def evaluate_startup(data: dict):
    # Here you'd connect to Google ADK + Gemini
    return {"evaluation": "Market size is large, AI-powered insights suggest strong growth."}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8080)
