# Generated by Django 4.2.3 on 2023-10-03 05:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ActivityEvents', '0003_alter_event_registration_event'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event_registration',
            name='guests',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
