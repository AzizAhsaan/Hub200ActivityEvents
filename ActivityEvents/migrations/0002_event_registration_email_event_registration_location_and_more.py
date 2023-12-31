# Generated by Django 4.2.3 on 2023-10-03 05:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ActivityEvents', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='event_registration',
            name='Email',
            field=models.EmailField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='event_registration',
            name='Location',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='event_registration',
            name='Phonenumber',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='event_registration',
            name='Username',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='event_registration',
            name='gender',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='event_registration',
            name='date_of_birth',
            field=models.DateField(null=True),
        ),
    ]
