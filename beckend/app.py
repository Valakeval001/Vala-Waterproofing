from flask import Flask, request, jsonify
from flask_cors import CORS
import csv
import os
from datetime import datetime
import smtplib
from email.message import EmailMessage

app = Flask(__name__)
CORS(app)

CSV_FILE = "contacts.csv"

OWNER_EMAIL = "keval50582@gmail.com"
EMAIL_PASSWORD = "ivtj xecf syrv tgsj"   # Gmail App Password

# ================= CSV HEADER FIX =================
def init_csv():
    if not os.path.exists(CSV_FILE):
        with open(CSV_FILE, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerow([
                "Name",
                "Email",
                "Phone",
                "Place",
                "Message",
                "Date_Time"
            ])

init_csv()
# =================================================


def send_email(data):
    msg = EmailMessage()
    msg["Subject"] = "📩 New Contact – VALA Waterproofing"
    msg["From"] = OWNER_EMAIL
    msg["To"] = OWNER_EMAIL

    msg.set_content(f"""
New enquiry received 👇

Name   : {data['name']}
Email  : {data['email']}
Phone  : {data['phone']}
Place  : {data['place']}

Message:
{data['message']}
""")

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(OWNER_EMAIL, EMAIL_PASSWORD)
        server.send_message(msg)


@app.route("/contact", methods=["POST"])
def contact():
    data = request.get_json()

    with open(CSV_FILE, "a", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow([
            data.get("name"),
            data.get("email"),
            data.get("phone"),
            data.get("place"),
            data.get("message"),
            datetime.now().strftime("%d-%m-%Y %H:%M:%S")
        ])

    send_email(data)

    return jsonify({"status": "success"})


if __name__ == "__main__":
    app.run(debug=True)
