import { useClinicaUpdate } from "@my-clinica/context/ClinicaUpdateContext";
import { useGetClinicData } from "@my-clinica/hooks/getClinic";
import React, { useEffect, useRef, useState } from "react";

const YandexMap2: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const clinicId = localStorage.getItem("clinicId")
    const clinicData = useGetClinicData(clinicId ? clinicId as string : "0")

    const [_, setMapInstance] = useState<any>(null);
    const [__, setPlacemark] = useState<any>(null);
    const [address, setAddress] = useState<string>(clinicData.data?.data.legalAddress as string);

    const { newData, setData } = useClinicaUpdate()

    useEffect(() => {
        setData({ ...newData, legalAddress: address })
    }, [address])

    useEffect(() => {
        const ymaps = (window as any).ymaps;

        ymaps.ready(() => {
            // Yandex kartani o'rnatish
            const map = new ymaps.Map(mapContainer.current, {
                center: [41.311081, 69.24056], // Toshkent markazi
                zoom: 10,
            });

            setMapInstance(map);

            // Markerni yaratish
            const newPlacemark = new ymaps.Placemark(
                [clinicData.data?.data.geolocationLatitude, clinicData.data?.data.geolocationLongitude],
                {},
                { draggable: true }
            );

            map.geoObjects.add(newPlacemark);
            setPlacemark(newPlacemark);

            // Markerni sudraganda manzilni yangilash
            newPlacemark.events.add("dragend", () => {
                const coords = newPlacemark.geometry.getCoordinates();
                fetchAddress(coords);
            });

            // Kartani bosganda markerni harakatlantirish
            map.events.add("click", (e: any) => {
                const coords = e.get("coords");
                newPlacemark.geometry.setCoordinates(coords);
                fetchAddress(coords);
            });
        });
    }, []);

    // Koordinatalar asosida manzilni olish
    const fetchAddress = (coords: number[]) => {
        const ymaps = (window as any).ymaps;

        setData({ ...newData, geolocationLatitude: coords[0], geolocationLongitude: coords[1] })

        ymaps.geocode(coords).then((res: any) => {
            const firstGeoObject = res.geoObjects.get(0);
            setAddress(firstGeoObject.getAddressLine());
        });
    };



    return (
        <div className="h-[400px] overflow-hidden ">
            {/* Chap qism */}
            <div className="pb-4 bg-white">
                <textarea id="message" value={address} className="sm:block hidden p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300" onChange={e => setAddress(e.target.value)} placeholder="Manzil tanlanmagan"></textarea>
                <textarea id="message" rows={4} value={address} className="block sm:hidden p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300" onChange={e => setAddress(e.target.value)} placeholder="Manzil tanlanmagan"></textarea>
            </div>

            {/* O'ng qism */}
            <div ref={mapContainer} style={{ height: "100%", width: "100%" }}></div>
        </div>
    );
};

export default YandexMap2;
