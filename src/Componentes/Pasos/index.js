import React from 'react';
import './style.css';

const Pasos = () => {
    return ( 
        <div className="pasos_sec">
            <h2 className="titulo_p">Alquilá tu departamento favorito en 4 pasos</h2>
            <div className="paso1">
            <img src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnIGlkPSJDYWxlbmRhciI+PHBhdGggZD0iTTU3LDhINTJWNmE0LDQsMCwwLDAtOCwwVjhIMzZWNmE0LDQsMCwwLDAtOCwwVjhIMjBWNmE0LDQsMCwwLDAtOCwwVjhIN2E1LDUsMCwwLDAtNSw1VjUzYTUsNSwwLDAsMCw1LDVIMzVhMSwxLDAsMCwwLDAtMkg3YTMuMDA5LDMuMDA5LDAsMCwxLTMtM1YyMkg2MFYzOWExLDEsMCwwLDAsMiwwVjEzQTUsNSwwLDAsMCw1Nyw4Wk00Niw2YTIsMiwwLDAsMSw0LDB2NmEyLDIsMCwwLDEtNCwwWk0zMCw2YTIsMiwwLDAsMSw0LDB2NmEyLDIsMCwwLDEtNCwwWk0xNCw2YTIsMiwwLDAsMSw0LDB2NmEyLDIsMCwwLDEtNCwwWk02MCwyMEg0VjEzYTMuMDA5LDMuMDA5LDAsMCwxLDMtM2g1djJhNCw0LDAsMCwwLDgsMFYxMGg4djJhNCw0LDAsMCwwLDgsMFYxMGg4djJhNCw0LDAsMCwwLDgsMFYxMGg1YTMuMDA5LDMuMDA5LDAsMCwxLDMsM1oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJNMzAsMjlhMiwyLDAsMCwwLTItMkgyNGEyLDIsMCwwLDAtMiwydjNhMiwyLDAsMCwwLDIsMmg0YTIsMiwwLDAsMCwyLTJabS02LDNWMjloNHYzWiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Ik0xOCwyOWEyLDIsMCwwLDAtMi0ySDEyYTIsMiwwLDAsMC0yLDJ2M2EyLDIsMCwwLDAsMiwyaDRhMiwyLDAsMCwwLDItMlptLTYsM1YyOWg0djNaIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0iTTUyLDM0YTIsMiwwLDAsMCwyLTJWMjlhMiwyLDAsMCwwLTItMkg0OGEyLDIsMCwwLDAtMiwydjNhMiwyLDAsMCwwLDIsMlptLTQtNWg0djNINDhaIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0iTTMwLDM4YTIsMiwwLDAsMC0yLTJIMjRhMiwyLDAsMCwwLTIsMnYzYTIsMiwwLDAsMCwyLDJoNGEyLDIsMCwwLDAsMi0yWm0tNiwzVjM4aDR2M1oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJNMTgsMzhhMiwyLDAsMCwwLTItMkgxMmEyLDIsMCwwLDAtMiwydjNhMiwyLDAsMCwwLDIsMmg0YTIsMiwwLDAsMCwyLTJabS02LDNWMzhoNHYzWiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Ik0yOCw0NUgyNGEyLDIsMCwwLDAtMiwydjNhMiwyLDAsMCwwLDIsMmg0YTIsMiwwLDAsMCwyLTJWNDdBMiwyLDAsMCwwLDI4LDQ1Wm0tNCw1VjQ3aDR2M1oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJNMzYsMzRoNGEyLDIsMCwwLDAsMi0yVjI5YTIsMiwwLDAsMC0yLTJIMzZhMiwyLDAsMCwwLTIsMnYzQTIsMiwwLDAsMCwzNiwzNFptMC01aDR2M0gzNloiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJNMzQsNDFhMiwyLDAsMCwwLDIsMiwxLDEsMCwwLDAsMC0yVjM4aDRhMSwxLDAsMCwwLDAtMkgzNmEyLDIsMCwwLDAtMiwyWiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNiw0NUgxMmEyLDIsMCwwLDAtMiwydjNhMiwyLDAsMCwwLDIsMmg0YTIsMiwwLDAsMCwyLTJWNDdBMiwyLDAsMCwwLDE2LDQ1Wm0tNCw1VjQ3aDR2M1oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJNNDksMzZBMTMsMTMsMCwxLDAsNjIsNDksMTMuMDE1LDEzLjAxNSwwLDAsMCw0OSwzNlptMCwyNEExMSwxMSwwLDEsMSw2MCw0OSwxMS4wMTMsMTEuMDEzLDAsMCwxLDQ5LDYwWiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Ik01NC43NzgsNDQuODA4LDQ3LDUyLjU4Niw0My40NjUsNDkuMDVhMSwxLDAsMCwwLTEuNDE0LDEuNDE0bDQuMjQyLDQuMjQzYTEsMSwwLDAsMCwxLjQxNCwwbDguNDg1LTguNDg1YTEsMSwwLDAsMC0xLjQxNC0xLjQxNFoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48L2c+PC9nPiA8L3N2Zz4=" />
            <p>Indicanos las FECHAS</p>
            </div>



        </div>
     );
}
 
export default Pasos;
