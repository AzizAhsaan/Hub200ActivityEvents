# Generated by Django 4.2.4 on 2023-10-03 23:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ActivityEvents', '0005_alter_event_registration_event'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact_us',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=50)),
                ('subject', models.CharField(max_length=50)),
                ('message', models.CharField(max_length=100)),
            ],
        ),
    ]
