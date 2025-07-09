import { useState, useRef, useEffect, Children } from 'react';

const DropPanel = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const header = Children.toArray(children).find(
    (child) => child.type.displayName === 'DropPanelHeader'
  );
  const content = Children.toArray(children).find(
    (child) => child.type.displayName === 'DropPanelContent'
  );

  useEffect(() => {
    if (open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open]);

  const dropdownIcon = open
                      ? require('../../assets/img/dropdown_off_icon.svg').default
                      : require('../../assets/img/dropdown_on_icon.svg').default;

  return (
    <div className="drop-panel-container">
        <div className="drop-panel-header" onClick={() => setOpen(!open)}>
            {header}
            <div className="arrow">
              <img src={dropdownIcon} alt="드롭다운 아이콘" />
            </div>
        </div>

        <div
            className={`drop-panel-content-wrapper ${open ? 'open' : ''}`}
            style={{height: `${height}px`}}
        >
            <div ref={contentRef} className="drop-panel-content">
                {content}
            </div>
        </div>
    </div>
  );
};

// Slot 컴포넌트
const DropPanelHeader = ({ children }) => <>{children}</>;
DropPanelHeader.displayName = 'DropPanelHeader';

const DropPanelContent = ({ children }) => <>{children}</>;
DropPanelContent.displayName = 'DropPanelContent';

// Slot 연결
DropPanel.Header = DropPanelHeader;
DropPanel.Content = DropPanelContent;

export default DropPanel;