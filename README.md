# 🎬 MovieManiax – Discover Movies & TV Shows

**MovieManiax** is a modern movie discovery web app that helps users explore trending, top-rated, and upcoming Movies & TV Shows. Built with **React**, **Vite**, and **Tailwind CSS**, the app uses the **TMDB API** for real-time data.

🔗 **Live App:** [https://moviemaniax01.netlify.app/](https://moviemaniax01.netlify.app/)

---

## ✨ Features

- 🔍 **Search** for Movies and TV Shows  
- 📊 **Trending, Top Rated, Upcoming** listings  
- 🧠 Genre-based filtering  
- 🌐 Fully **responsive design** for mobile and desktop  
- ⚡ **Fast performance** with React + Vite  
- 🎨 Styled with **Tailwind CSS**  
- 🧩 Component-based architecture using React  

---

## 🛠️ Tech Stack

| Tech         | Description                    |
|--------------|--------------------------------|
| React        | UI Library                     |
| Vite         | Fast development bundler       |
| Tailwind CSS | Utility-first CSS framework    |
| TMDB API     | Movie & TV show data provider  |
| Netlify      | Deployment & Hosting platform  |

---

## 🚀 Getting Started

1. **Clone the Repository**

    ```bash
    git clone https://github.com/jeeva-2708/moviemaniax.git
    cd moviemaniax
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Add Environment Variables**

    The `.env` file is **not included** in this repository for security reasons.

    To make the app work with the TMDB API, create a `.env` file in the root directory of the project and add the following line:

    ```env
    VITE_TMDB_BEARER=your_tmdb_bearer_token_here
    ```

    📌 You can get your Bearer Token from [TMDB API Settings](https://www.themoviedb.org/settings/api)

    ✅ The `.env` file is already listed in `.gitignore`, so it will not be pushed to GitHub.  
    ✅ A sample `.env.example` is provided for reference.

4. **Run the App Locally**

    ```bash
    npm run dev
    ```

5. **Build for Production**

    ```bash
    npm run build
    ```

---

## 📁 Project Structure

```bash
src/
├── assets/         # Icons, logos, and images
├── components/     # Reusable UI components
├── pages/          # Page views (Home, TV Shows, etc.)
├── hooks/          # Custom React hooks
├── App.jsx         # Root component
├── main.jsx        # ReactDOM entry
```

## 🔐 .env Example

An `.env.example` file is included in the project to show the required environment variable:

.env.example
VITE_TMDB_BEARER=your_tmdb_bearer_token_here


✅ Rename `.env.example` to `.env`  
✅ Replace the value with your actual TMDB Bearer Token

---

## 🧑‍💻 Author

**Jeeva Viswanathan**  
📧 Email: jeeva.viswanathan04@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/jeeva-viswanathan-b2a44b274)  
💻 [GitHub](https://github.com/jeeva-2708)

---

### 📌 Tags

#React #Vite #TailwindCSS #MovieApp #WebDevelopment #TMDB

