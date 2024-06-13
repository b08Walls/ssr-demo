import React from "react";

interface DrawerProps {
  children: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({ children }) => {
  const arreglo = new Array(10).fill(1);

  return (
    <body className="grid grid-cols-12 border-2 border-blue-500 h-screen bg-slate-950 text-white">
      <div className="col-span-3 border-2 border-red-500 flex flex-col gap-2 p-2">
        {arreglo.map((_, index) => {
          return (
            <a
              href={`/${index + 1}`}
              key={index}
              className="p-4 bg-slate-500 rounded-md cursor-pointer"
            >
              <h4>Menu {index + 1}</h4>
            </a>
          );
        })}
      </div>
      <div className="col-span-9 border-2 border-green-500 flex flex-col justify-start items-stretch">
        {children}
      </div>
    </body>
  );
};

export function withDrawer<T = {}>(
  component: React.FC<T>
): React.FC<T & JSX.IntrinsicAttributes> {
  const Component = component as React.FC<T & JSX.IntrinsicAttributes>;
  const ComponentWithDrawer: React.FC<T & JSX.IntrinsicAttributes> = (
    props
  ) => (
    <Drawer>
      <Component {...props} />
    </Drawer>
  );
  return ComponentWithDrawer;
}
