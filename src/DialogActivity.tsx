import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ActivityProps } from './PruebasActivity';

type DialogActivityProps = {
    activity: ActivityProps | null;
    isVisible: boolean;
    onHide: () => void;
    onSave: () => void;
    onChange: (e: any) => void;
    isEditMode: boolean;
    responsables: string[];
};

const DialogActivity = ({ activity, isVisible, onHide, onSave, onChange, isEditMode, responsables }: DialogActivityProps) => {
    return (
        <div
            className={`fixed top-0 right-0 h-full w-[35vw] bg-white shadow-lg overflow-y-auto transform transition-transform ${
                isVisible ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ zIndex: 1000 }}
        >
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">
                        {activity?.nombreActividad || 'Nueva Actividad'}
                    </h2>
                    <Button icon="pi pi-times" onClick={onHide} className="p-button-text" />
                </div>
                {activity && (
                    <>
                        <h3 className="text-lg font-bold">Nombre de la Actividad</h3>
                        <InputText
                            name="nombreActividad"
                            value={activity.nombreActividad}
                            onChange={onChange}
                            className="mb-3 w-full"
                            disabled={!isEditMode}
                        />
                        <h3 className="text-lg font-bold">Duración</h3>
                        <div className="flex border border-black p-1 mt-1 text-xs">
                            <p>Fecha de Inicio</p>
                            <Divider layout="vertical" />
                            <Calendar
                                value={activity.fechaInicio}
                                onChange={(e) => onChange && onChange({ target: { name: 'fechaInicio', value: e.value } })}
                                dateFormat="dd/mm/yy"
                                disabled={!isEditMode}
                            />
                            <Divider layout="vertical" />
                        </div>
                        <div className="flex border border-black p-1 mt-1 text-xs">
                            <p>Fecha de Fin</p>
                            <Divider layout="vertical" />
                            <Calendar
                                value={activity.fechaFin}
                                onChange={(e) => onChange && onChange({ target: { name: 'fechaFin', value: e.value } })}
                                dateFormat="dd/mm/yy"
                                disabled={!isEditMode}
                            />
                            <Divider layout="vertical" />
                        </div>
                        <h3 className="text-lg font-bold">Descripción</h3>
                        <InputText
                            name="descripcion"
                            value={activity.descripcion}
                            onChange={onChange}
                            className="text-sm border border-black p-1 mt-1"
                            disabled={!isEditMode}
                        />
                        <h3 className="text-lg font-bold">Responsable</h3>
                        <div className="flex mt-2">
                            <p className="text-sm p-1 mt-1">Persona asignada</p>
                            <Dropdown
                                value={activity.responsable}
                                options={responsables.map((responsable) => ({ label: responsable, value: responsable }))}
                                onChange={(e) => onChange && onChange({ target: { name: 'responsable', value: e.value } })}
                                placeholder="Nombre de Responsable"
                                disabled={!isEditMode}
                            />
                        </div>
                        <h3 className="text-lg font-bold mt-2">Resultado</h3>
                        <InputText
                            name="resultado"
                            value={activity.resultado}
                            onChange={onChange}
                            className="text-sm border border-black p-1 mt-1"
                            disabled={!isEditMode}
                        />
                        {isEditMode && <Button label="Guardar Actividad" icon="pi pi-check" onClick={onSave} />}
                    </>
                )}
            </div>
        </div>
    );
};

export default DialogActivity;
