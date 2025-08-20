"use client";

import { inputClassNames, selectClassNames } from "@/utils/classNames";
import { costosDelivery } from "@/utils/costoDelivery";
import { departamentos } from "@/utils/departamentos";
import { distritos } from "@/utils/distritos";
import { provincias } from "@/utils/provincias";
import { Input, Select, SelectItem } from "@heroui/react";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

type FormData = {
  nombre_apellidos: string;
  email: string;
  dni: string;
  celular: string;
  direccion: string;
  referencia: string;
  departamento: string | null;
  provincia: string | null;
  distrito: string | null;
};

type Departamento = {
  id: number;
  Departamento: string;
};
type Provincia = {
  id: number;
  Provincia: string;
  UbigeoId: number;
};
type Distrito = {
  id: number;
  Distrito: string;
  UbigeoProvId: number;
};

export default function DatosCliente() {
  const [mounted, setMounted] = useState(false);
  const [selectDepartamento, setSelectDepartamento] = useState<Departamento>();
  const [selectProvincia, setSelectProvincia] = useState<Provincia>();
  const [selectDistrito, setSelectDistrito] = useState<Distrito>();

  useEffect(() => {
    setMounted(true);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      nombre_apellidos: "",
      email: "",
      dni: "",
      celular: "",
      direccion: "",
      referencia: "",
      departamento: null,
      provincia: null,
      distrito: null,
    },
  });

  const watchDepartamento = watch("departamento");
  const watchProvincia = watch("provincia");
  const watchDistrito = watch("distrito");

  // Resetear provincia y distrito cuando cambia departamento
  useEffect(() => {
    if (watchDepartamento) {
      setValue("provincia", null);
      setValue("distrito", null);
      setSelectDepartamento(
        departamentos.find((d) => d.id === Number(watchDepartamento))
      );
    } else {
      setSelectDepartamento(undefined);
      setSelectProvincia(undefined);
      setSelectDistrito(undefined);
    }
  }, [watchDepartamento, setValue]);

  // Resetear distrito cuando cambia provincia
  useEffect(() => {
    if (watchProvincia) {
      setValue("distrito", null);
      setSelectProvincia(
        provincias.find((p) => p.id === Number(watchProvincia))
      );
    } else {
      setSelectProvincia(undefined);
      setSelectDistrito(undefined);
    }
  }, [watchProvincia, setValue]);

  // Actualizar selectDistrito
  useEffect(() => {
    if (watchDistrito) {
      setSelectDistrito(distritos.find((d) => d.id === Number(watchDistrito)));
    } else {
      setSelectDistrito(undefined);
    }
  }, [watchDistrito]);

  // Filtra provincias y distritos
  const filterProvincias = provincias.filter(
    (p) => p.UbigeoId === Number(watchDepartamento)
  );
  const filterDistritos = distritos.filter(
    (d) => d.UbigeoProvId === Number(watchProvincia)
  );

  // Función para calcular costo de delivery
  const calcularDelivery = (): number => {
    if (!selectDepartamento || !selectProvincia || !selectDistrito) return 15;

    const costo = costosDelivery.find(
      (c) =>
        c.departamento.toUpperCase() ===
          selectDepartamento.Departamento.toUpperCase() &&
        c.provincia.toUpperCase() === selectProvincia.Provincia.toUpperCase() &&
        c.distrito.toUpperCase() === selectDistrito.Distrito.toUpperCase()
    );

    return costo ? costo.valor : 15;
  };

  const delivery = calcularDelivery();

  const onSubmit = (data: FormData) => {
    console.log("Datos enviados:", data);
    console.log("Costo de delivery:", delivery);
    // Aquí puedes enviar los datos a tu API o guardarlos en localStorage
  };

  if (!mounted) return null;

  return (
    <section className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Datos del Cliente</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Nombre y Apellidos */}
        <Input
          classNames={inputClassNames}
          isRequired
          label="Nombre y Apellidos"
          labelPlacement="outside"
          errorMessage={errors.nombre_apellidos?.message}
          isInvalid={!!errors.nombre_apellidos}
          {...register("nombre_apellidos", {
            required: "El nombre es obligatorio",
            minLength: {
              value: 2,
              message: "Debe tener al menos 2 caracteres",
            },
          })}
          variant="bordered"
          radius="sm"
        />

        {/* Email */}
        <Input
          classNames={inputClassNames}
          isRequired
          type="email"
          label="Email"
          labelPlacement="outside"
          errorMessage={errors.email?.message}
          isInvalid={!!errors.email}
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Ingresa un email válido",
            },
          })}
          variant="bordered"
          radius="sm"
        />

        {/* DNI */}
        <Input
          classNames={inputClassNames}
          isRequired
          label="DNI"
          labelPlacement="outside"
          errorMessage={errors.dni?.message}
          isInvalid={!!errors.dni}
          {...register("dni", {
            required: "El DNI es obligatorio",
            pattern: { value: /^[0-9]{8}$/, message: "Debe tener 8 dígitos" },
          })}
          variant="bordered"
          radius="sm"
          maxLength={8}
        />

        {/* Celular */}
        <Input
          classNames={inputClassNames}
          isRequired
          label="Celular"
          labelPlacement="outside"
          errorMessage={errors.celular?.message}
          isInvalid={!!errors.celular}
          {...register("celular", {
            required: "El celular es obligatorio",
            pattern: {
              value: /^9[0-9]{8}$/,
              message: "Debe ser un celular válido (9 dígitos, inicia con 9)",
            },
          })}
          variant="bordered"
          radius="sm"
          maxLength={9}
        />

        {/* Dirección */}
        <Input
          classNames={inputClassNames}
          label="Dirección"
          labelPlacement="outside"
          errorMessage={errors.direccion?.message}
          isInvalid={!!errors.direccion}
          {...register("direccion")}
          variant="bordered"
          radius="sm"
        />

        {/* Referencia */}
        <Input
          classNames={inputClassNames}
          label="Referencia"
          labelPlacement="outside"
          placeholder="Ej: Cerca al parque, frente a la iglesia"
          errorMessage={errors.referencia?.message}
          isInvalid={!!errors.referencia}
          {...register("referencia")}
          variant="bordered"
          radius="sm"
        />

        {/* Departamento */}
        <Controller
          name="departamento"
          control={control}
          rules={{ required: "Selecciona un departamento" }}
          render={({ field }) => (
            <Select
              className="max-w-xs"
              labelPlacement="outside"
              label="Departamento"
              placeholder="Selecciona departamento"
              selectionMode="single"
              classNames={selectClassNames}
              selectedKeys={field.value ? [field.value] : []}
              onSelectionChange={(keys) => field.onChange(Array.from(keys)[0])}
              errorMessage={errors.departamento?.message}
              isInvalid={!!errors.departamento}
            >
              {departamentos.map((d) => (
                <SelectItem key={d.id.toString()} textValue={d.Departamento}>
                  {d.Departamento}
                </SelectItem>
              ))}
            </Select>
          )}
        />

        {/* Provincia */}
        <Controller
          name="provincia"
          control={control}
          rules={{ required: "Selecciona una provincia" }}
          render={({ field }) => (
            <Select
              className="max-w-xs"
              labelPlacement="outside"
              label="Provincia"
              placeholder="Selecciona provincia"
              selectionMode="single"
              classNames={selectClassNames}
              selectedKeys={field.value ? [field.value] : []}
              onSelectionChange={(keys) => field.onChange(Array.from(keys)[0])}
              errorMessage={errors.provincia?.message}
              isInvalid={!!errors.provincia}
              isDisabled={!watchDepartamento || filterProvincias.length === 0}
            >
              {filterProvincias.map((p) => (
                <SelectItem key={p.id.toString()} textValue={p.Provincia}>
                  {p.Provincia}
                </SelectItem>
              ))}
            </Select>
          )}
        />

        {/* Distrito */}
        <Controller
          name="distrito"
          control={control}
          rules={{ required: "Selecciona un distrito" }}
          render={({ field }) => (
            <Select
              className="max-w-xs"
              labelPlacement="outside"
              label="Distrito"
              placeholder="Selecciona distrito"
              selectionMode="single"
              classNames={selectClassNames}
              selectedKeys={field.value ? [field.value] : []}
              onSelectionChange={(keys) => field.onChange(Array.from(keys)[0])}
              errorMessage={errors.distrito?.message}
              isInvalid={!!errors.distrito}
              isDisabled={!watchProvincia || filterDistritos.length === 0}
            >
              {filterDistritos.map((d) => (
                <SelectItem key={d.id.toString()} textValue={d.Distrito}>
                  {d.Distrito}
                </SelectItem>
              ))}
            </Select>
          )}
        />

        {/* Costo de Delivery */}
        <p className="mt-2 font-medium">Costo de delivery: S/. {delivery}</p>

        {/* Botón */}
        <div className="pt-4">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Enviar Datos
          </button>
        </div>
      </form>
    </section>
  );
}
