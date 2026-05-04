# PythonIntroductory

## Frontend (React + Vite)

A minimal React frontend is included in the `frontend` folder. It uses React Router (v6), functional components, and the Fetch API to talk to the FastAPI backend at `http://localhost:8000`.

### Run the backend
Make sure your FastAPI backend is running (from the project root):

```
uv run fastapi dev backend/main.py
```

Or however you usually start your FastAPI app so it is available at `http://localhost:8000`.

### Run the frontend

1. Open a new terminal and go to the frontend folder:
   - Windows PowerShell:
     ```
     cd frontend
     ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the dev server:
   ```
   npm run dev
   ```
   Vite should open the app at `http://localhost:5173`.

### CORS note
If you see CORS errors in the browser, enable CORS in your FastAPI app, for example:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Pages
- Home (`/`): Welcome and navigation links.
- Hello (`/hello`): Optional name input and button to call `GET /hello-world`.
- Math (`/math`): Two numbers and buttons for `GET /add`, `/subtract`, `/multiply`, `/divide`.