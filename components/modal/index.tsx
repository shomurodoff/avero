import React, {ReactNode, useEffect} from "react";
import ReactModal from "react-modal";
import clsx from "clsx";

interface Props {
    open: boolean;
    setOpen: any | null;
    children: ReactNode;
    full?: Boolean,
    hidden?: Boolean,
    classNames?: String,
}

const Index = ({open, setOpen, children, full,hidden=true,classNames=''}: Props) => {
    useEffect(() => {
        if(hidden) {
            if (open) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }
    }, [open,hidden]);
    return (
        <ReactModal
            isOpen={open}
            onRequestClose={() => setOpen(false)}
            shouldCloseOnOverlayClick={true}
            overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-[100]"
            overlayElement={(props, contentElement) => (
                <div className="fixed bg-slate-700 inset-0 z-[100]" {...props}>
                    {contentElement}
                </div>
            )}
            className={clsx("fixed   bottom-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 translate-x-1/2 right-1/2",classNames, {
                '!max-w-unset !left-8 !right-8 translate-x-0': full,
                'container': !full
            })}
            contentElement={(props) => <div {...props}>{children}</div>}
        />
    );
};

export default Index;
