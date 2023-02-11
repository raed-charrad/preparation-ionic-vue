interface weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}
interface main {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
}
interface wind {
    deg: number;
    speed: number;
}
interface city {
    id: number;
    name: string;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
    coord: {
        lat: number;
        lon: number;
    };
}
interface list {
    dt: number;
    main: main;
    weather: weather[];
    clouds: {
        all: number;
    };
    wind: wind;
    visibility: number;
    pop: number;
    sys: {
        pod: string;
    };
    dt_txt: string;
}
export interface OneWeather {
    cod: string;
    message: number;
    cnt: number;
    list: list[];
    city: city;
}