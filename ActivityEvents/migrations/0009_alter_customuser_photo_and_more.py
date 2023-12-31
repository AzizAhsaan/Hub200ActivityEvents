# Generated by Django 4.2.6 on 2023-10-11 04:46

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ActivityEvents', '0008_peoplereviews_events_status_alter_events_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='photo',
            field=models.ImageField(default='Unknownperson.jpg', null=True, upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='event_registration',
            name='comment',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='events',
            name='event_date',
            field=models.DateField(default=datetime.date(2023, 10, 11), null=True),
        ),
    ]
