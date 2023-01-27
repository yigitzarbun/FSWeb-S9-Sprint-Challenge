// Write your tests here
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import AppFunctional from "./AppFunctional";
test("sanity", () => {
  expect(true).toBe(true);
});

test("hata olmadan render ediliyor", () => {
  render(<AppFunctional />);
});

test("butonlar ve buton metinleri görünür", () => {
  render(<AppFunctional />);
  const solButon = screen.getByText(/SOL/i);
  const sagButon = screen.getByText(/SAĞ/i);
  const asagiButon = screen.getByText(/AŞAĞI/i);
  const yukariButon = screen.getByText(/YUKARI/i);
  expect(solButon).toBeInTheDocument();
  expect(sagButon).toBeInTheDocument();
  expect(asagiButon).toBeInTheDocument();
  expect(yukariButon).toBeInTheDocument();
  expect(solButon).toHaveTextContent("SOL");
  expect(sagButon).toHaveTextContent("SAĞ");
  expect(asagiButon).toHaveTextContent("AŞAĞI");
  expect(yukariButon).toHaveTextContent("YUKARI");
});

test("koordinatlar başlığı görünür", () => {
  render(<AppFunctional />);
  const koordinatlarMetin = screen.getByText(/Koordinatlar/i);
  expect(koordinatlarMetin).toBeInTheDocument();
});

test("x kere ilerlediniz metni görünür", () => {
  render(<AppFunctional />);
  const adimSayac = screen.getByText(/kere ilerlediniz/i);
  expect(adimSayac).toBeInTheDocument();
});

test("sağ buton çalışıyor", () => {
  render(<AppFunctional />);
  const sagButon = screen.getByText(/SAĞ/i);
  const koordinatlarMetin = screen.getByText(/Koordinatlar/i);
  const adimSayac = screen.getByText(/kere ilerlediniz/i);
  fireEvent.click(sagButon);
  expect(koordinatlarMetin).toHaveTextContent("Koordinatlar (3, 2)");
  expect(adimSayac).toHaveTextContent("1 kere ilerlediniz");
});
