"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

function Header({ payload, setPayload }) {
  const kelas = ["6.1", "6.2", "6.3", "7.1", "7.2", "7.3"];

  const { data: mapels } = useQuery(
    "mapel",
    async () => {
      {
        const resp = await fetch("http://localhost:3001/api/mapel", {
          method: "GET",
        });
        return await resp.json();
      }
    },
    {
      staleTime: 10000,
    }
  );

  return (
    <div className="flex grid-cols-1 md:grid-cols-2  gap-2">
      <div>
        <select
          className="select select-bordered w-full max-w-xs"
          value={payload.lokasi}
          onChange={(e) => {
            setPayload((prev) => ({
              ...prev,
              lokasi: e.target.value,
            }));
          }}
        >
          <option disabled value="" selected>
            Select Location
          </option>
          <option value="Lokasi1">Lokasi 1</option>
          <option value="Lokasi2">Lokasi 2</option>
        </select>
      </div>
      <div>
        <select
          className="select select-bordered w-full max-w-xs"
          value={payload.kelas}
          onChange={(e) => {
            setPayload((prev) => ({
              ...prev,
              kelas: e.target.value,
            }));
          }}
        >
          <option disabled value="" selected>
            Select Class
          </option>
          {kelas.map((kelas, i) => (
            <option value={kelas} key={i}>
              {kelas}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          className="select select-bordered w-full max-w-xs"
          value={payload.mapel}
          onChange={(e) => {
            setPayload((prev) => ({
              ...prev,
              mapel: e.target.value,
            }));
          }}
        >
          <option disabled value="" selected>
            Select Mapel
          </option>
          {mapels?.data.map((mapels, i) => (
            <option value={mapels?.namaMapel} key={i}>
              {mapels.namaMapel}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Header;
