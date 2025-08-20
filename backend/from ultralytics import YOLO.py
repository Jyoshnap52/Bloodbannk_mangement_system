from ultralytics import YOLO
import cv2

# Load YOLOv8 pre-trained model
model = YOLO("yolov8n.pt")   # 'n' = nano (fastest, smallest model)

# Open webcam (0 = default camera)
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break

    # Run YOLOv8 detection
    results = model(frame, stream=True)

    for r in results:
        for box in r.boxes:
            cls_id = int(box.cls[0])           # Class ID
            label = model.names[cls_id]        # Class name
            conf = float(box.conf[0])          # Confidence score

            # Check if detected object is a "cell phone"
            if label == "cell phone" and conf > 0.5:
                x1, y1, x2, y2 = map(int, box.xyxy[0])  # bounding box
                cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 255), 3)
                cv2.putText(frame, f"{label} {conf:.2f}",
                            (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX,
                            0.9, (0, 0, 255), 2)

    # Show result window
    cv2.imshow("Phone Detection - Mini Project 1", frame)

    # Press 'q' to quit
    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

cap.release()
cv2.destroyAllWindows()